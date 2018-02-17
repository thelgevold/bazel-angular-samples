def _rollup(ctx):

  baseFolder = "{0}/rollup.runfiles/{1}".format(ctx.executable.rollup.dirname, ctx.workspace_name)
  rollupConfig = "{0}/rollup.config.js".format(baseFolder)

  es2105SourceFolder = "bazel-out/host/bin/{0}prod_source.es6".format(ctx.build_file_path.replace("BUILD.bazel", ""))
  sourceRoot = ctx.build_file_path.split("/")[0]

  src = "{0}/{1}/{2}".format(es2105SourceFolder, ctx.workspace_name, sourceRoot) 
  rxjs = "{0}/rxjs".format(es2105SourceFolder)

  output_dir = ctx.actions.declare_directory("bundles.es6")

  args = ["--config", rollupConfig]
  args += ["--output.dir", output_dir.path]
  args += ["--output.format", "cjs"]
  args += ["--es6", es2105SourceFolder]
  args += ["--workspace", ctx.workspace_name]
  args += ["--sourceRoot", sourceRoot]
  args += ["--entryPoint", ctx.attr.entry_point]
  args += ["--src", src]
  args += ["--rxjs", rxjs]

  ctx.action(
      executable = ctx.executable.rollup,
      outputs = [output_dir],
      arguments = args
  )

  return DefaultInfo(runfiles=ctx.runfiles([output_dir]), files=depset([]))

rollup = rule(
    implementation = _rollup,
    attrs = {
        "entry_point": attr.string(mandatory=True),
        "rollup": attr.label(default=Label("//src/apps/demo:rollup"), executable=True, cfg="host", allow_files=True)
    }
)