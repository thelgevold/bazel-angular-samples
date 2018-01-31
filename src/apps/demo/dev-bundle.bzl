def _dev(ctx):

  baseFolder = "{0}/concat.runfiles/{1}/src/apps/demo".format(ctx.executable.concat.dirname, ctx.workspace_name)
  sourceFolder = "{0}/{1}".format(ctx.workspace_name, ctx.attr.entryPoint)

  args = [baseFolder]
  args += [ctx.outputs.bundle.path]
  args += [sourceFolder]

  ctx.action(
      executable = ctx.executable.concat,
      outputs = [ctx.outputs.bundle],
      arguments = args
  )

  return struct()

dev = rule(
    implementation = _dev,
    attrs = {
        "devsource": attr.string(mandatory=True),
        "entryPoint": attr.string(mandatory=True),
        "concat": attr.label(default=Label("//src/apps/demo:concat"), executable=True, cfg="host", allow_files=True),
        
    },
    outputs = {
        "bundle": "%{name}.js"
    }
)