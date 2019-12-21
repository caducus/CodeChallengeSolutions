def oddOne(arr)
  oddNumber = arr.find {|odd| odd % 2 != 0}
  if !oddNumber
    return -1
  else
    return arr.index(oddNumber)
  end
end
