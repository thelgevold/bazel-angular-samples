load(":bundle.bzl", "bundle")
load("@build_bazel_rules_nodejs//:internal/collect_es6_sources.bzl", "collect_es6_sources")

def _rollup(ctx):

  src = collect_es6_sources(ctx);
  
  output_dir_es6 = bundle(ctx, src)

  return DefaultInfo(runfiles=ctx.runfiles([output_dir_es6]))

rollup = rule(
  implementation = _rollup,
  attrs = {
    "modules": attr.string_list(mandatory = True),
    "entry_point": attr.string(mandatory=True),
    "deps": attr.label_list(),
    "rollup": attr.label(default=Label("//src/apps/demo:rollup"), executable=True, cfg="host", allow_files=True)
  }
)