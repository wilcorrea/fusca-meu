export default [
  {
    path: '/',
    component: 'Dashboard/Index',
    children: [
      { path: '', component: 'Dashboard/Components/Home' },
      { path: 'rankings', component: 'Dashboard/Components/Rankings' },
      { path: 'custom', component: 'Dashboard/Components/Custom' },
      { path: 'hunting', component: 'Dashboard/Components/Hunting' }
    ]
  }
]
