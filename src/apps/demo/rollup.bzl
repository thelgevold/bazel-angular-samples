def _rollup(ctx):

  baseFolder = "{0}/rollup.runfiles/{1}".format(ctx.executable.rollup.dirname, ctx.workspace_name)

  rollupConfig = "{0}/rollup.config.js".format(baseFolder)

  print(rollupConfig)

  entryPoint = "bazel-out/host/bin/src/apps/demo/prod_source.es6/{0}/src/apps/demo/{1}".format(ctx.workspace_name, ctx.attr.entry_point)
  
  #print(entryPoint)

  args = ["--config", rollupConfig]
  args += ["--output.dir", ctx.outputs.bundle_es6.path.replace("main.js", "")]
  args += ["--output.format", "cjs"]
  #args += ["--input", entryPoint]
 
  ctx.action(
      executable = ctx.executable.rollup,
      outputs = [ctx.outputs.bundle_es6],
      arguments = args
  )

  return struct()

rollup = rule(
    implementation = _rollup,
    attrs = {
        "entry_point": attr.string(mandatory=True),
        "rollup": attr.label(default=Label("//src/apps/demo:rollup"), executable=True, cfg="host", allow_files=True)
        
    },
    outputs = {
        "bundle_es6": "main.js"
    }
)