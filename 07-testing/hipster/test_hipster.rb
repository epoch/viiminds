require_relative 'hipster'

require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

describe Hipster, "minitest syntas reference" do

  before do
    @hipster = Hipster.new
  end

  it '#define' do
    # hipster = Hipster.new
    @hipster.define.must_equal "you won't understand"
  end

  it '#walk?' do
    skip
  end

  it '#labels' do
    # hipster = Hipster.new
    @hipster.labels.must_be_empty
  end

  describe "when asked about the font" do

    it "should be helvetica" do
      @hipster.preferred_font.must_equal "helvetica"
    end

  end

  describe "when asked about mainstream" do
    it "won's be mainstream" do
      @hipster.mainstream?.wont_equal true
    end
  end

end
