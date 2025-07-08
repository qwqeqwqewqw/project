<script>
  import { IconChevronRight } from '@tabler/icons-svelte';

  const indoorActivities = [
    { name: 'Carom', icon: '🎯', description: 'Classic board game for strategic minds' },
    { name: 'Chess', icon: '♟️', description: 'Battle of wits and strategy' },
    { name: 'Table Hockey', icon: '🏒', description: 'Fast-paced tabletop action' },
    { name: 'Table Soccer', icon: '⚽', description: 'Miniature football excitement' },
    { name: 'Table Tennis', icon: '🏓', description: 'Quick reflexes and precision' },
    { name: 'Pot-Paintings', icon: '🎨', description: 'Creative artistic expression' },
    { name: 'Puzzles', icon: '🧩', description: 'Mind-bending challenges' },
    { name: 'Snake Ladder', icon: '🐍', description: 'Classic childhood favorite' }
  ];

  const outdoorActivities = [
    { name: 'Zorbing', icon: '⚪', description: 'Roll down hills in a giant ball' },
    { name: 'Kayaking', icon: '🛶', description: 'Paddle through serene waters' },
    { name: 'Rifle Shooting', icon: '🎯', description: 'Test your marksmanship skills' },
    { name: 'Archery', icon: '🏹', description: 'Ancient art of bow and arrow' },
    { name: 'Air Hockey', icon: '🏒', description: 'High-speed puck action' },
    { name: 'Burma Bridge', icon: '🌉', description: 'Adventure rope bridge crossing' },
    { name: 'Commando Net', icon: '🕸️', description: 'Military-style obstacle course' },
    { name: 'Cycling', icon: '🚴', description: 'Explore scenic resort trails' }
  ];

  const activityCategories = [
    {
      title: 'Indoor Activities',
      subtitle: 'Perfect for relaxation and mental stimulation',
      activities: indoorActivities,
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-500'
    },
    {
      title: 'Outdoor Activities',
      subtitle: 'Thrilling adventures in nature',
      activities: outdoorActivities,
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-500'
    }
  ];
</script>

<section class="py-16 bg-orange-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="new-icon-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
        Activities
      </h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-base sm:text-lg text-gray-900 leading-relaxed mb-6">
          Say goodbye to your digital screens to now de-stress and recharge your body and soul. Cherilyn Monta, a paradise hideaway where luxurious seclusion meets exotic natural beauty, offers a wide array of activities.
        </p>
        <p class="text-base sm:text-lg text-gray-900 leading-relaxed">
          Enjoy a coterie of thrilling, action-packed and adrenaline-pumping activities at the best beach resort in Konkan. The activities organized at Cherilyn Monta Resort are:
        </p>
      </div>
    </div>

    <!-- Activities Grid -->
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
      {#each activityCategories as category}
        <div class="space-y-6">
          <!-- Category Header -->
          <div class="text-center lg:text-left">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {category.title}
            </h3>
            <p class="text-gray-600 text-base sm:text-lg">
              {category.subtitle}
            </p>
          </div>

          <!-- Activities Cards -->
          <div class="grid sm:grid-cols-2 gap-4">
            {#each category.activities as activity}
              <div class="group {category.bgColor} {category.borderColor} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div class="flex items-start space-x-3">
                  <!-- Icon -->
                  <div class="flex-shrink-0 w-10 h-10 {category.iconBg} rounded-lg flex items-center justify-center text-white text-lg">
                    {activity.icon}
                  </div>
                  
                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-900 text-base sm:text-lg mb-1 group-hover:text-green-700 transition-colors">
                      {activity.name}
                    </h4>
                    <p class="text-sm text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  <!-- Arrow Icon -->
                  <div class="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconChevronRight class="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                  </div>
                </div>
              </div>
            {/each}
          </div>

          <!-- Category Summary -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <span class="text-sm font-medium text-gray-900">
                {category.activities.length} Activities Available
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Ready for Adventure?
        </h3>
        <p class="text-gray-600 mb-6 leading-relaxed">
          Book your stay and experience all these amazing activities included in your resort package.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/rooms" class="btn bg-green-700 text-white border-0 hover:bg-green-600 transition-all duration-300 px-6 py-3">
            Book Your Stay
          </a>
          <a href="/contact-us" class="btn btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 px-6 py-3">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>