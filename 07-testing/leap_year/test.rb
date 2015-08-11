require_relative 'leap'
require 'minitest/autorun'

class LeapYearTest < Minitest::Test

  def test_1997
    assert_equal false, LeapYear.leap_year?(1997)
  end

  def test_2000
    assert_equal true, LeapYear.leap_year?(2000)
  end

  def test_1900
    assert_equal false, LeapYear.leap_year?(1900)
  end

  def test_1996
    assert_equal true, LeapYear.leap_year?(1996)
  end

  def test_2004
    assert_equal true, LeapYear.leap_year?(2004)
  end


end