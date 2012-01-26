module ApplicationHelper
  def markdown(text)
    options = [:hard_wrap, :autolink, :gh_blockcode, :fenced_code,  :tables, :strikethrough]
    syntax_highlighter(Redcarpet.new(text, *options).to_html).html_safe
  end

  def syntax_highlighter(html)
      doc = Nokogiri::HTML(html)
        doc.search("//pre[@lang]").each do |pre|
          pre.replace Pygments.highlight(pre.text.rstrip, :lexer => "ruby")
        end
      doc.css('body').inner_html.to_s
  end
  
  def avatar_url(user)
      gravatar_id = Digest::MD5.hexdigest(user.email.downcase)
      "http://gravatar.com/avatar/#{gravatar_id}.png?s=40"
  end
  
  def nav_link(link_text, link_path)
    class_name = current_page?(link_path) ? 'active' : ''

    content_tag(:li, :class => class_name) do
      link_to link_text, link_path
    end
  end
  
end
