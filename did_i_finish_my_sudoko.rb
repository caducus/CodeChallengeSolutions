def done_or_not(board)

  is_my_sudoku_complete = true

  # function to check if the numbers 1..9 are included
  def one_to_nine (array)
    # empty array that holds true/false values
    is_true = []
    # loop through numbers 1 to 9
    for num in 1..9
      is_true.push(array.include? num)
    end
    # check if all items are true
    return is_true.all?
  end

  # check each horizontal line
  board.each do |line|
    complete = one_to_nine (line)
    if complete === false
      is_my_sudoku_complete = false
      break
    end
  end

  if is_my_sudoku_complete === true
    # check each verticle line
    for index in 0..8
      # empty array to hold temporary line
      temp_array = []
      # push the numbers from the board into the temp_array
      board.each do |line|
        temp_array.push(line[index])
      end
      complete = one_to_nine (temp_array)
      if complete === false
        is_my_sudoku_complete = false
        break
      end
    end
  end

  # check each box
  if is_my_sudoku_complete === true
    # box 1
    temp_array = []
    temp_array.push(
      board[0][0], board[0][1], board[0][2],
      board[1][0], board[1][1], board[1][2],
      board[2][0], board[2][1], board[2][2])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 2
    temp_array = []
    temp_array.push(
      board[3][0], board[3][1], board[3][2],
      board[4][0], board[4][1], board[4][2],
      board[5][0], board[5][1], board[5][2])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 3
    temp_array = []
    temp_array.push(
      board[6][0], board[6][1], board[6][2],
      board[7][0], board[7][1], board[7][2],
      board[8][0], board[8][1], board[8][2])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 4
    temp_array = []
    temp_array.push(
      board[0][3], board[0][4], board[0][5],
      board[1][3], board[1][4], board[1][5],
      board[2][3], board[2][4], board[2][5])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 5
    temp_array = []
    temp_array.push(
      board[3][3], board[3][4], board[3][5],
      board[4][3], board[4][4], board[4][5],
      board[5][3], board[5][4], board[5][5])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 6
    temp_array = []
    temp_array.push(
      board[6][3], board[6][4], board[6][5],
      board[7][3], board[7][4], board[7][5],
      board[8][3], board[8][4], board[8][5])

    complete = one_to_nine (temp_array)
    if complete === false
      is_my_sudoku_complete = false
    end
  end

  if is_my_sudoku_complete === true
    # box 7
   temp_array = []
   temp_array.push(
     board[0][6], board[0][7], board[0][8],
     board[1][6], board[1][7], board[1][8],
     board[2][6], board[2][7], board[2][8])

   complete = one_to_nine (temp_array)
   if complete === false
     is_my_sudoku_complete = false
   end
 end

  if is_my_sudoku_complete === true
   # box 8
   temp_array = []
   temp_array.push(
     board[3][6], board[3][7], board[3][8],
     board[4][6], board[4][7], board[4][8],
     board[5][6], board[5][7], board[5][8])

   complete = one_to_nine (temp_array)
   if complete === false
     is_my_sudoku_complete = false
   end
  end

  if is_my_sudoku_complete === true
   # box 9
   temp_array = []
   temp_array.push(
     board[6][6], board[6][7], board[6][8],
     board[7][6], board[7][7], board[7][8],
     board[8][6], board[8][7], board[8][8])

   complete = one_to_nine (temp_array)
   if complete === false
     is_my_sudoku_complete = false
   end
  end

  if is_my_sudoku_complete === false
    return "Try again!"
  else
    return "Finished!"
  end

end

test_board1 =
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

test_board2 =
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]

puts done_or_not(test_board1)
puts done_or_not(test_board2)


  ## THIS IS OLD CODE THAT WORKS

  # # check each horizontal line
  # board.each do |line|
  #   # empty array to hold true/false values
  #   is_true = []
  #   # complete the loop 9 times to check for each number, 1 to 9
  #   for num in 1..9
  #     is_true.push(line.include? num)
  #   end
  #   # if any of the numbers come back false, break out of function
  #   if is_true.include? false === true
  #     return false
  #     break
  #   end
  # end

  # # check each verticle line
  # for index in 0..8
  #   # empty array to hold the temporary verticle line
  #   temp_array = []
  #   # push the numbers from the board to the temporary array
  #   board.each do |line|
  #     temp_array.push(line[index])
  #   end
  #   # empty array to hold true/false values
  #   is_true = []
  #   # complete the loop 9 times to check for each number, 1 to 9
  #   for num in 1..9
  #     is_true.push(temp_array.include? num)
  #   end
  #   # if any of the numbers come back false, break out of the function
  #   if is_true.include? false === true
  #     return false
  #     break
  #   end
  # end
