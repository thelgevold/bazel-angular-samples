def _bundle(ctx):

  baseFolder = "{0}/concat.runfiles/{1}/src/apps/demo".format(ctx.executable.concat.dirname, ctx.workspace_name)

  args = [baseFolder]
  args += [ctx.outputs.bundle.path]
  args += [ctx.workspace_name]

  ctx.action(
      executable = ctx.executable.concat,
      outputs = [ctx.outputs.bundle],
      arguments = args
  )

  return struct()

bundle = rule(
    implementation = _bundle,
    attrs = {
        "devsource": attr.string(mandatory=True),
        "concat": attr.label(default=Label("//src/apps/demo:concat"), executable=True, cfg="host", allow_files=True),
        
    },
    outputs = {
        "bundle": "%{name}.js"
    }
)