require 'fileutils'

desc "clean, generate, promote"
task :build => [:clean, :generate, :promote]

desc "delete old build files"
task :clean do
  puts "Cleaning old build files..."

  keepers = %w[.nojekyll CNAME Rakefile _source]
  files = Dir["*"]
  abort("It looks like you aren't in the project's root directory. Please cd and try again.") unless files.include?("_source")
  FileUtils.rm_rf( files - keepers )

  puts "  Done!"
end

desc "run nanoc to generate site files"
task :generate do
  puts "Running nanoc..."

  FileUtils.cd(File.expand_path("_source", File.dirname(__FILE__))) do
    %x{rm -rf output}
    %x{nanoc3 compile}
  end

  puts "  Done!"
end

desc "copy generated files up to project root"
task :promote do
  puts "Copying files to project root..."

  FileUtils.cd(File.expand_path("_source/output", File.dirname(__FILE__))) do
    FileUtils.cp_r( Dir["*"], File.dirname(__FILE__) )
  end

  puts "  Done!"
end

task :default => :build
