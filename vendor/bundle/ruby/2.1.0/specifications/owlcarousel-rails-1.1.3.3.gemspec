# -*- encoding: utf-8 -*-
# stub: owlcarousel-rails 1.1.3.3 ruby lib

Gem::Specification.new do |s|
  s.name = "owlcarousel-rails"
  s.version = "1.1.3.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["OwlFonk", "Adrian Rangel"]
  s.date = "2014-07-04"
  s.description = "Owl Carousel. Touch enabled jQuery plugin that lets you create beautiful responsive carousel slider."
  s.email = ["adrian.rangel@gmail.com"]
  s.homepage = "http://owlgraphic.com/owlcarousel/"
  s.licenses = ["MIT"]
  s.rubyforge_project = "owlcarousel-rails"
  s.rubygems_version = "2.2.2"
  s.summary = "Owl Carousel. Touch enabled jQuery plugin that lets you create beautiful responsive carousel slider."

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jquery-rails>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<jquery-rails>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<jquery-rails>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
