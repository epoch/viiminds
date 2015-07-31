module ApplicationHelper

  # my own example of link_to
  def link(label, path)
    raw("<a href='#{path}'>#{label}</a>")
  end

end
