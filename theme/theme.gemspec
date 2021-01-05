# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "theme"
  spec.version       = "0.1.1"
  spec.authors       = ["Sylvan Le Deunff"]
  spec.email         = ["sylvan.ledeunff@gmail.com"]

  spec.summary       = "Theme of the website use to showcase my git templates..."
  spec.homepage      = "https://templates.sylvan.ovh"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll"
end
