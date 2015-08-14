import play.PlayImport._
import play.PlayScala
import sbtassembly.Plugin.AssemblyKeys._

name := "theGym-App"

version := "0.0.1-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.4"

net.virtualvoid.sbt.graph.Plugin.graphSettings

assemblySettings

jarName in assembly := "theGym.jar"

mainClass in assembly := Some("play.core.server.NettyServer")

fullClasspath in assembly += Attributed.blank(PlayKeys.playPackageAssets.value)

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

mergeStrategy in assembly := {
  case PathList("play", "core", "server", "ServerWithStop.class") => MergeStrategy.last
  case x =>
    val oldStrategy = (mergeStrategy in assembly).value
    oldStrategy(x)
}

libraryDependencies ++= Seq(
  ws exclude("commons-logging", "commons-logging"),
  jdbc,
  anorm,
  "com.softwaremill.macwire" %% "macros" % "0.7.3",
  "org.scalatestplus" %% "play" % "1.2.0" % "test",
  "net.ceedubs" %% "ficus" % "1.1.2",
  "org.scalamock" %% "scalamock-scalatest-support" % "3.2" % "test",
  "de.leanovate.play-mockws" %% "play-mockws" % "0.12" % "test"
)

fork in run := true