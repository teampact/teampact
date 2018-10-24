shared_examples 'prevents unauthorized access' do
  it do
    subject
    expect(response).to have_http_status :unauthorized
  end
end

shared_examples 'allows access' do
  it do
    subject
    expect(response).to have_http_status :successful
  end
end
