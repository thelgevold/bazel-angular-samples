def _webpack(ctx):

  baseFolder = "{0}/webpack.runfiles/{1}/webpack.config.js".format(ctx.executable.webpack.dirname, ctx.workspace_name)

  args = ["--config", baseFolder]
  args += [ctx.outputs.bundle_es6.path]
  
  ctx.action(
      executable = ctx.executable.webpack,
      outputs = [ctx.outputs.bundle_es6],
      arguments = args
  )

  argsTS = ["--target", "es5"]
  argsTS += ["--allowJS"]
  argsTS += [ctx.outputs.bundle_es6.path]
  argsTS += ["--outFile", ctx.outputs.bundle_es5.path]

  ctx.action(
      executable = ctx.executable.typescript,
      inputs = [ctx.outputs.bundle_es6],
      outputs = [ctx.outputs.bundle_es5],
      arguments = argsTS
  )

  argsUglify = [ctx.outputs.bundle_es5.path]
  argsUglify += ["--output", ctx.outputs.bundle_es5_min.path]

  ctx.action(
      executable = ctx.executable.uglify,
      inputs = [ctx.outputs.bundle_es5],
      outputs = [ctx.outputs.bundle_es5_min],
      arguments = argsUglify
  )

  return struct()

webpack = rule(
    implementation = _webpack,
    attrs = {
        "entryPoint": attr.string(mandatory=True),
        "webpack": attr.label(default=Label("//src/apps/demo:webpack"), executable=True, cfg="host", allow_files=True),
        "typescript": attr.label(default=Label("//src/apps/demo:es5"), executable=True, cfg="host", allow_files=True),
        "uglify": attr.label(default=Label("//src/apps/demo:uglify"), executable=True, cfg="host", allow_files=True)
        
    },
    outputs = {
        "bundle_es6": "%{name}.es6.js",
        "bundle_es5": "%{name}.src.es5.js",
        "bundle_es5_min": "%{name}.min.js"
    }
)