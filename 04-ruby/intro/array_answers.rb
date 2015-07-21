days_of_the_week = %w{Monday Tuesday Wednesday Thursday Friday Saturday Sunday}

p days_of_the_week

temp_day = days_of_the_week.pop
days_of_the_week.unshift(temp_day)

# days_of_the_week[-3..1]

# days_of_the_week.unshift(days_of_the_week.pop)

days_of_the_week = [%w{Monday Tuesday Wednesday Thursday Friday}, %w{Saturday Sunday}]

days_of_the_week.shift

days_of_the_week.flatten.sort
