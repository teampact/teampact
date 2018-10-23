json.(@profile,
  :slug,
  :name,
  :email,
  :phone,
  :tagline,
)

json.photo_url url_for(@profile.photo_url)
