workspace(name = "demo")

maven_jar(
    name = "protobuf_java_format",
    artifact = "com.googlecode.protobuf-java-format:protobuf-java-format:1.4",
    sha1 = "b8163b6940102c1808814471476f5293dfb419df",
)

####################################
# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
http_archive(
    name = "com_github_bazelbuild_buildtools",
    sha256 = "4d8d6244320dd751590f9100cf39fd7a4b75cd901e1f3ffdfd6f048328883695",
    # Note, this commit matches the version of buildifier in angular/ngcontainer
    url = "https://github.com/bazelbuild/buildtools/archive/b3b620e8bcff18ed3378cd3f35ebeb7016d71f71.zip",
)

####################################
# Fetch and install the NodeJS rules
http_archive(
    name = "build_bazel_rules_nodejs",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/0.7.0.zip",
    strip_prefix = "rules_nodejs-0.7.0",
    sha256 = "d0cecf6b149d431ee8349f683d1db6a2a881ee81d8066a66c1b112a4b02748de",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(package_json = ["//:package.json"])

yarn_install(
    name = "protobufs_compiletime_deps",
    package_json = "//tools/protobufjs:package.json",
    yarn_lock = "//tools/protobufjs:yarn.lock",
)

####################################
# Fetch and install the Sass rules
git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.3",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()

####################################
# Fetch and install the TypeScript rules
http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "a2c81776a4a492ff9f878f9705639f5647bef345f7f3e1da09c9eeb8dec80485",
    strip_prefix = "rules_typescript-0.10.1",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.10.1.zip",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Some of the TypeScript is written in Go.
# Bazel doesn't support transitive WORKSPACE deps, so we must repeat them here.
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "4b14d8dd31c6dbaf3ff871adcd03f28c3274e42abc855cb8fb4d01233c0154dc",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.10.1/rules_go-0.10.1.tar.gz",
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

####################################
# Tell Bazel about some workspaces that were installed from npm.
local_repository(
    name = "angular",
    path = "node_modules/@angular/bazel",
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

