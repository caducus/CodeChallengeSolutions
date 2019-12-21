def isValidWalk(walk)
  if walk.length == 10
    if walk.join.count("n") == walk.join.count("s") && walk.join.count("w") == walk.join.count("e")
      return true
    else
      return false
    end
  else
   return false
  end
end


p isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
# true

p isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
# false

p isValidWalk(['w'])
# false

p isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
# false
