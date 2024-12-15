import shutil

list_file_to_copy = [
  '_redirects',
  'robots.txt',
  'sitemap.xml'
]
for file_path in list_file_to_copy:
  source_path = file_path
  destination_path = 'dist/' + file_path
  shutil.copy(source_path, destination_path)
  print(f'File berhasil disalin dari {source_path} ke {destination_path}.')