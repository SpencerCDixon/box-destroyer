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
    // 12: 'basic',
    // 14: 'basic',
    // 16: 'basic',
    // 18: 'basic',
    // 20: 'basic',
    // 22: 'basic',
    // 24: 'basic',
    // 26: 'basic',
    // 28: 'basic',
    // 30: 'basic',
    // 32: 'basic',
    // 34: 'basic',
    // 36: 'basic',
    // 38: 'basic',
    // 40: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
  ],
  interval: 500,
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
    4: 'basic',
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

export const levelFive = {
  mapBlueprint: [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 16, 17, 18, 19, 'X', 'P', 'X'],
    ['X', 'X', 14, 15, 'P', 'X', 20, 21, 'P', 'X'],
    ['X', 'X', 13, 12, 11, 10, 9, 22, 23, 'X'],
    ['X', 'X', 'X', 'P', 'X', 'X', 8, 'P', 'X', 'X'],
    ['X', 'X', 3, 4, 5, 6, 7, 'P', 'X', 'X'],
    ['X', 'X', 2, 'P', 'P', 'P', 'P', 'P', 'X', 'X'],
    ['X', 'X', 1, 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ],
  enemyBlueprint: {
    1: 'basic',
    2: 'basic',
    3: 'basic',
    4: 'basic',
    5: 'basic',
    6: 'basic',
    7: 'basic',
    8: 'basic',
    9: 'basic',
    10: 'basic',
    15: 'basic',
    16: 'basic',
    17: 'basic',
    18: 'basic',
    20: 'basic',
    21: 'basic',
    22: 'basic',
    27: 'basic',
    28: 'basic',
    29: 'basic',
    30: 'basic',
    35: 'basic',
    36: 'basic',
    37: 'basic',
    40: 'basic',
    55: 'basic',
    56: 'basic',
    57: 'basic',
    80: 'basic',
    85: 'basic',
    90: 'basic',
    110: 'basic',
    111: 'basic',
    112: 'basic',
    113: 'basic',
    135: 'basic',
    145: 'basic',
    155: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
    'array',
  ],
};

export const levelSix = {
  mapBlueprint: [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 13, 12, 11, 10, 9, 'X'],
    ['X', 'X', 'P', 'X', 14, 'P', 'X', 'P', 8, 'X'],
    ['X', 24, 23, 22, 15, 16, 5, 6, 7, 'X'],
    ['X', 25, 'P', 21, 'P', 17, 4, 3, 2, 1],
    ['X', 26, 'P', 20, 19, 18, 'X', 'X', 'X', 'X'],
    ['X', 27, 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 28, 29, 'X', 'X', 'P', 35, 36, 37, 'X'],
    ['X', 'P', 30, 31, 32, 33, 34, 'P', 38, 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 39, 'X'],
  ],
  enemyBlueprint: {
    2: 'basic',
    3: 'basic',
    4: 'basic',
    5: 'basic',
    6: 'basic',
    10: 'basic',
    11: 'basic',
    12: 'basic',
    15: 'basic',
    16: 'basic',
    20: 'basic',
    22: 'basic',
    24: 'basic',
    26: 'basic',
    30: 'basic',
    35: 'basic',
    40: 'basic',
    45: 'basic',
    50: 'basic',
    55: 'basic',
    60: 'basic',
    70: 'basic',
    80: 'basic',
    90: 'basic',
    100: 'basic',
    110: 'basic',
    120: 'basic',
    130: 'basic',
    140: 'basic',
    160: 'basic',
    180: 'basic',
    200: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
    'column',
  ],
};

export const levelSeven = {
  mapBlueprint: [
    ['P', 'X', 'X', 27, 28, 29, 30, 31, 32, 'X'],
    [23, 24, 25, 26, 'X', 'X', 'X', 'P', 33, 'P'],
    [22, 'P', 'P', 'P', 'X', 'X', 'X', 'P', 34, 'P'],
    [21, 'P', 17, 16, 15, 14, 13, 'P', 35, 'X'],
    [20, 19, 18, 'P', 'P', 'P', 12, 'X', 36, 'X'],
    ['X', 'X', 'X', 'P', 9, 10, 11, 'P', 37, 'X'],
    ['X', 'X', 'X', 'P', 8, 'X', 'P', 'P', 38, 'X'],
    ['X', 'X', 5, 6, 7, 'P', 41, 40, 39, 'X'],
    [2, 3, 4, 'P', 'X', 'X', 42, 'P', 'X', 'X'],
    [1, 'X', 'X', 'X', 'X', 'X', 43, 'P', 'X', 'X'],
  ],
  enemyBlueprint: {
    2: 'basic',
    3: 'basic',
    4: 'basic',
    5: 'basic',
    6: 'basic',
    10: 'basic',
    11: 'basic',
    12: 'basic',
    15: 'basic',
    16: 'basic',
    20: 'basic',
    22: 'basic',
    24: 'basic',
    26: 'basic',
    30: 'basic',
    35: 'basic',
    40: 'basic',
    45: 'basic',
    50: 'basic',
    60: 'basic',
    70: 'basic',
    80: 'basic',
    90: 'basic',
    100: 'basic',
    110: 'basic',
    120: 'basic',
    140: 'basic',
    160: 'basic',
    180: 'basic',
    200: 'basic',
    225: 'basic',
    250: 'basic',
    280: 'basic',
    320: 'basic',
  },
  goldStart: 200,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
    'column',
    'array',
    'surround',
  ],
};

export const levelEight = {
  mapBlueprint: [
    [12, 11, 10, 9, 'P', 5, 4, 3, 2, 1],
    [13, 'P', 'P', 8, 7, 6, 'X', 'X', 'X', 'P'],
    [14, 'X', 'X', 'X', 'X', 'X', 'X', 'P', 'P', 49],
    [15, 16, 17, 18, 'P', 'P', 'P', 'P', 'P', 48],
    [24,  23, 'P', 19, 'P', 'P', 'P', 'P', 46, 47],
    [25, 22, 21, 20, 'P', 'P', 'P', 'P', 45, 'P'],
    [26, 'P', 'P', 'P', 'P', 'P', 'P', 'P', 44, 43,],
    [27, 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'X', 42],
    [28, 'X', 'X', 33, 34, 35, 'P','P', 'X', 41],
    [29, 30, 31, 32, 'X', 36, 37, 38, 39, 40],
  ],
  enemyBlueprint: {
    1: 'basic',
    2: 'basic',
    3: 'basic',
    4: 'basic',
    5: 'basic',
    6: 'basic',
    7: 'basic',
    8: 'basic',
    9: 'basic',
    10: 'basic',
    11: 'basic',
    12: 'basic',
    13: 'basic',
    14: 'basic',
    15: 'basic',
    16: 'basic',
    17: 'basic',
    18: 'basic',
    19: 'basic',
    20: 'basic',
    21: 'basic',
    22: 'basic',
    23: 'basic',
    24: 'basic',
    25: 'basic',
    27: 'basic',
    28: 'basic',
    29: 'basic',
    30: 'basic',
    31: 'basic',
    32: 'basic',
    33: 'basic',
    34: 'basic',
    36: 'basic',
    37: 'basic',
    38: 'basic',
    39: 'basic',
    40: 'basic',
    41: 'basic',
    42: 'basic',
    43: 'basic',
    44: 'basic',
    45: 'basic',
    46: 'basic',
    47: 'basic',
    48: 'basic',
    49: 'basic',
    50: 'basic',
    55: 'advanced',
    60: 'basic',
    65: 'basic',
    70: 'basic',
    75: 'advanced',
    76: 'basic',
    77: 'basic',
    78: 'basic',
    79: 'basic',
    80: 'basic',
    81: 'basic',
    82: 'basic',
    83: 'basic',
    84: 'basic',
    85: 'basic',
    120: 'advanced',
    160: 'basic',
    180: 'basic',
    200: 'basic',
    220: 'basic',
    240: 'basic',
    280: 'basic',
    350: 'basic',
  },
  goldStart: 160,
  allowedTowers: [
    'cross',
    'vertical',
    'horizontal',
    'column',
    'array',
    'surround',
  ],
};
