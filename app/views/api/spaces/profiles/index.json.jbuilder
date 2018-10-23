json.profiles @profiles do |profile|
  json.(profile, :email, :name, :slug)
end
