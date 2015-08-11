require_relative 'calc'
require 'minitest/autorun'

# optional to show test results like a spec
require 'minitest/reporters' 
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new 

class CalcTest < MiniTest::Test

  def test_product_of_0_5_is_0
    assert_equal 0, Calculator.multiply([0,5]) 
  end

  def test_empty_array_returns_zero
    assert_equal 0, Calculator.multiply([])
  end

  def test_string_returns_zero
    assert_equal 0, Calculator.multiply('abc')
  end

end