def _webpack(ctx):

  baseFolder = "{0}/webpack.runfiles/{1}/webpack.config.js".format(ctx.executable.webpack.dirname, ctx.workspace_name)

  args = ["--config", baseFolder]
  args += [ctx.outputs.bundle.path]
  
  ctx.action(
      executable = ctx.executable.webpack,
      outputs = [ctx.outputs.bundle],
      arguments = args
  )

  return struct()

webpack = rule(
    implementation = _webpack,
    attrs = {
        "entryPoint": attr.string(mandatory=True),
        "webpack": attr.label(default=Label("//src/apps/demo:webpack"), executable=True, cfg="host", allow_files=True),
        
    },
    outputs = {
        "bundle": "%{name}.js"
    }
)