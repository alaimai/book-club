export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('books').del()

  // Inserts seed entries
  await knex('books').insert([
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      description:
        'A novel set in the Great Depression, focusing on themes of racial injustice and moral growth.',
      review:
        'A timeless classic that sheds light on serious social issues through a compelling narrative.',
      author: 'Harper Lee',
      cover_image:
        'https://cdn2.penguin.com.au/covers/original/9781784752637.jpg',
    },
    {
      id: 2,
      title: '1984',
      description:
        'A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.',
      review:
        'A haunting depiction of a world where freedom and truth are under constant threat.',
      author: 'George Orwell',
      cover_image:
        'https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      description:
        'A romantic novel that critiques the societal expectations and class structures of early 19th century England.',
      review:
        'A witty and insightful exploration of love, marriage, and societal norms.',
      author: 'Jane Austen',
      cover_image:
        'https://cdn.kobo.com/book-images/afcd8653-3b27-4423-bee9-570fb1441aed/1200/1200/False/pride-and-prejudice-71.jpg',
    },
  ])
}
