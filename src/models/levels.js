export const levelOne = {
  mapBlueprint: [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 1, 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 2, 'P', 6, 7, 8, 9, 'X', 'X'],
    ['X', 'X', 3, 4, 5, 'X', 'X', 10, 'X', 'X'],
    ['X', 'X', 'P', 'X', 'P', 'X', 'X', 11, 'X', 'X'],
    ['X', 'X', 'P', 20, 19, 18, 'P', 12, 'X', 'X'],
    ['X', 'X', 'P', 21, 'P', 17, 'X', 13, 'X', 'X'],
    ['X', 'X', 'P', 22, 23, 16, 15, 14, 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ],
  enemyBlueprint: {
    2: 'basic',
    4: 'basic',
    6: 'basic',
    8: 'basic',
    10: 'basic',
    12: 'basic',
    14: 'basic',
    16: 'basic',
    18: 'basic',
    20: 'basic',
    22: 'basic',
    24: 'basic',
    26: 'basic',
    28: 'basic',
    30: 'basic',
    32: 'basic',
    34: 'basic',
    36: 'basic',
    38: 'basic',
    40: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
  ],
};

export const levelTwo = {
  mapBlueprint: [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 1, 'X', 'X'],
    ['X', 'P', 'P', 10, 9, 8, 'P', 2, 'X', 'X'],
    ['X', 'P', 'P', 11, 'X', 7, 'X', 3, 'P', 'X'],
    ['X', 'X','P', 12, 'P', 6, 5, 4, 'X', 'X'],
    ['X', 'X', 14, 13, 'P', 'X', 'P', 'P', 'P', 'X'],
    ['X', 'P', 15, 'X', 19, 20, 21, 'X', 'P', 'X'],
    ['X', 'X', 16, 17, 18, 'X', 22, 23, 'P', 'X'],
    ['X', 'X', 'X', 'P', 'X', 'X', 'X', 24, 25, 'X'],
    ['X', 'X', 'P', 'P', 30, 29, 28, 27, 26, 'X'],
    ['X', 'X', 'X', 'X', 31, 'X', 'X', 'X', 'X', 'X'],
  ],
  enemyBlueprint: {
    6: 'basic',
    8: 'basic',
    10: 'basic',
    12: 'basic',
    14: 'basic',
    20: 'basic',
    22: 'basic',
    24: 'basic',
    26: 'basic',
    28: 'basic',
    34: 'basic',
    36: 'basic',
    38: 'basic',
    40: 'basic',
    42: 'basic',
    46: 'basic',
    47: 'basic',
    48: 'basic',
    49: 'basic',
    50: 'basic',
    52: 'basic',
    55: 'basic',
    59: 'basic',
    64: 'basic',
    70: 'basic',

  },
  goldStart: 270,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
  ],
};

export const levelThree = {
  mapBlueprint: [
    [1, 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [2, 3, 4, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['X', 'P', 5, 'P', 'P', 32, 33, 34, 35, 36],
    [8, 7, 6, 'P', 'P', 31, 'P', 'P', 'P', 'P'],
    [9, 'X', 25, 26, 27, 30, 'P', 'P', 'P', 'P'],
    [10, 'X', 24, 'X', 28, 29, 'P', 'P', 'P', 'P'],
    [11, 'P', 23, 'X', 'P', 'P', 'P', 'P', 'P', 'P'],
    [12, 'X', 22, 21, 20, 'P', 'P', 'P', 'P', 'P'],
    [13, 'X', 'P', 'P', 19, 'P', 'P', 'P', 'P', 'P'],
    [14, 15, 16, 17, 18, 'P', 'P', 'P', 'P', 'P'],
  ],
  enemyBlueprint: {
    4: 'basic',
    5: 'basic',
    6: 'basic',
    7: 'basic',
    8: 'basic',
    14: 'basic',
    15: 'basic',
    16: 'basic',
    17: 'basic',
    24: 'basic',
    25: 'basic',
    26: 'basic',
    27: 'basic',
    40: 'basic',
    42: 'basic',
    44: 'basic',
    45: 'basic',
    49: 'basic',
    50: 'basic',
    60: 'basic',
    75: 'basic',
    76: 'basic',
    79: 'basic',
    80: 'basic',
    88: 'basic',
    89: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
  ],
};

export const levelFour = {
  mapBlueprint: [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 1, 'X', 'X'],
    ['X', 'X', 11, 10, 9, 'P', 3, 2, 'X', 'X'],
    ['X', 'X', 12, 'P', 8, 'P', 4, 'P', 'X', 'X'],
    ['X', 'X', 13, 14, 7, 6, 5, 'P', 'X', 'X'],
    ['X', 'X', 16, 15, 'X', 'X', 'P', 'P', 'X', 'X'],
    ['X', 'X', 17, 'X', 'P', 22, 23, 24, 'X', 'X'],
    ['X', 'X', 18, 19, 20, 21, 'P', 25, 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 26, 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ],
  enemyBlueprint: {
    4: ['basic', 'basic'],
    5: 'basic',
    6: 'basic',
    7: 'basic',
    8: 'basic',
    9: 'basic',
    10: 'basic',
    11: 'basic',
    12: 'basic',
    18: 'basic',
    20: 'basic',
    21: 'basic',
    22: 'basic',
    23: 'basic',
    24: 'basic',
    25: 'basic',
    26: 'basic',
    27: 'basic',
    29: 'basic',
    32: 'basic',
    35: 'basic',
    40: 'basic',
    50: 'basic',
    51: 'basic',
    52: 'basic',
    54: 'basic',
    56: 'basic',
    61: 'basic',
    66: 'basic',
    71: 'basic',
    76: 'basic',
    81: 'basic',
    86: 'basic',
    100: 'basic',
    110: 'basic',
    120: 'basic',
    130: 'basic',
    140: 'basic',
    150: 'basic',
    165: 'basic',
  },
  goldStart: 190,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
    'surround',
  ],
};
