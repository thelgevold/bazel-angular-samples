def _rollup(ctx):

  baseFolder = "{0}/rollup.runfiles/{1}".format(ctx.executable.rollup.dirname, ctx.workspace_name)
  rollupConfig = "{0}/rollup.config.js".format(baseFolder)

  args = ["--config", rollupConfig]
  args += ["--output.dir", ctx.outputs.bundle_es6_main.path.replace("main.js", "")]
  args += ["--output.format", "cjs"]
 
  ctx.action(
      executable = ctx.executable.rollup,
      outputs = [ctx.outputs.bundle_es6_main, ctx.outputs.bundle_es6_spreadsheet, ctx.outputs.bundle_es6_chunk1],
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
        "bundle_es6_main": "main.js",
        "bundle_es6_spreadsheet": "spreadsheet.module.ngfactory.js",
        "bundle_es6_chunk1": "chunk1.js"
    }
)