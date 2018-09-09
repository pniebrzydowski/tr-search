export const SORT_OPTIONS = [
  {
    value: {
      column: 'price',
      order: 'asc',
    },
    label: 'Lowest price first'
  },
  {
    value: {
      column: 'price',
      order: 'desc',
    },
    label: 'Highest price first'
  },
  {
    value: {
      column: 'length',
      order: 'desc',
    },
    label: 'Longest tour first'
  },
  {
    value: {
      column: 'length',
      order: 'asc',
    },
    label: 'Shortest tour first'
  },
];

export const BREAKPOINTS = {
  smallMin: 450,
  smallMax: 567,
  medMin: 568,
  medMax: 767,
  lgMin: 768
}

export const COLORS = {
  primary: '#2c3e50',
  secondary: '#818d99',
  light: '#c7d0d9',
}
