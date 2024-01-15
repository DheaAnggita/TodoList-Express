module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Seed todos
      await queryInterface.bulkInsert('Todos', [
        {
          task: 'Todo 1',
          deadline: '2024-12-12',
          user_id: 1,
          status:false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Todo 2',
          deadline: '2024-12-12',
          user_id: 1,
          status:false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more todos as needed
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      // Remove seeded todos
      await queryInterface.bulkDelete('Todos', null, {});
    },
  };