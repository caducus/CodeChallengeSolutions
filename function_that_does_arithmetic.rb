def arithmetic(a, b, operator)
  if operator == "add"
    return a + b
  elsif operator == "subtract"
    return a - b
  elsif operator == "multiply"
    return a * b
  elsif operator == "divide"
    return a / b
  else
    return "This isn't actually a thing that I can do, sorry."
  end
end
