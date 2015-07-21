arr = ['a','b','c','d']

# _.each(arr, function(elem) {

# })


arr.each do |elem| 

  puts 'hey'
  puts elem

end

arr.each { |elem| 
  puts elem
  puts 'hey' 
}