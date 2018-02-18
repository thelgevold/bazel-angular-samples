def _rollup(ctx):

  baseFolder = "{0}/rollup.runfiles/{1}".format(ctx.executable.rollup.dirname, ctx.workspace_name)
  rollupConfig = "{0}/rollup.config.js".format(baseFolder)

  es2105SourceFolder = "bazel-out/host/bin/{0}prod_source.es6".format(ctx.build_file_path.replace("BUILD.bazel", ""))
  sourceRoot = ctx.build_file_path.split("/")[0]

  src = "{0}/{1}/{2}".format(es2105SourceFolder, ctx.workspace_name, sourceRoot) 
  rxjs = "{0}/rxjs".format(es2105SourceFolder)

  output_dir_es6 = ctx.actions.declare_directory("bundles.es6")

  bundles = ""
  for e in ctx.attr.modules:
    bundles +=  e + ","
  
  args = ["--config", rollupConfig]
  args += ["--output.dir", output_dir_es6.path]
  args += ["--output.format", "cjs"]
  args += ["--es6", es2105SourceFolder]
  args += ["--workspace", ctx.workspace_name]
  args += ["--sourceRoot", sourceRoot]
  args += ["--modules", bundles]
  args += ["--entry_point", ctx.attr.entry_point]
  args += ["--src", src]
  args += ["--rxjs", rxjs]

  ctx.action(
      executable = ctx.executable.rollup,
      outputs = [output_dir_es6],
      arguments = args
  )

  return DefaultInfo(runfiles=ctx.runfiles([output_dir_es6]), files=depset([]))

rollup = rule(
    implementation = _rollup,
    attrs = {
        "modules": attr.string_list(mandatory = True),
        "entry_point": attr.string(mandatory=True),
        "rollup": attr.label(default=Label("//src/apps/demo:rollup"), executable=True, cfg="host", allow_files=True)
    }
)