require 'pry'

gaers1 = "DT"

gaers = ['DT', 'Matt', 'Jamie', 'Bart']

binding.pry


[1] pry(main)> gaers
=> ["DT", "Matt", "Jamie", "Bart"]
[2] pry(main)> gaers.length
=> 4
[3] pry(main)> gaers.length()
=> 4
[4] pry(main)> gaers.length
=> 4
[5] pry(main)> gaers.size
=> 4
[6] pry(main)> gaers.count
=> 4
[7] pry(main)> gaers[0]
=> "DT"
[8] pry(main)> gaers[1]
=> "Matt"
[9] pry(main)> gaers[7]
=> nil
[10] pry(main)> gaers.first
=> "DT"
[11] pry(main)> gaers.last
=> "Bart"
[12] pry(main)> gaers[-1]
=> "Bart"
[13] pry(main)> gaers[-2]
=> "Jamie"
[14] pry(main)> gaers.push('hank')
=> ["DT", "Matt", "Jamie", "Bart", "hank"]
[15] pry(main)> gaers.pop
=> "hank"
[16] pry(main)> gaers.unshift('hank')
=> ["hank", "DT", "Matt", "Jamie", "Bart"]
[17] pry(main)> gaers.shift
=> "hank"
[18] pry(main)> gaers << 'hank'
=> ["DT", "Matt", "Jamie", "Bart", "hank"]
[19] pry(main)> 


[19] pry(main)> gaers.index('DT')
=> 0
[20] pry(main)> gaers.slice(0,2)
=> ["DT", "Matt"]
[21] pry(main)> gaers[3]
=> "Bart"
[22] pry(main)> gaers
=> ["DT", "Matt", "Jamie", "Bart", "hank"]
[23] pry(main)> gaers[0..2]
=> ["DT", "Matt", "Jamie"]
[24] pry(main)> magic_number = 2
=> 2
[25] pry(main)> gaers[magic_number]
