# pair programmed with Yulli

def duplicate_encoder(word)
new_string = ''
  word.downcase.each_char do |i|
    #if letter is not repeated = "("
    if word.downcase.count(i) > 1
      new_string += ')'
    else
      #if letter is repeated = ")"
      new_string += '('
    end
  end
    # return string
    return new_string
end


test1 = "din"
test2 = "recede"
test3 = "Success"
test4 = "(( @"

duplicate_encoder(test1)
# duplicate_encoder(test2)
# duplicate_encoder(test3)
# duplicate_encoder(test4)
