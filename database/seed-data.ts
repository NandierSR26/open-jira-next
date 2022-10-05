interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'pendiente: anim veniam magna nostrud consequat deserunt irure est ullamco consequat amet cillum dolor.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'Aprendiendo Next.js',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Preparandome para trabajar',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'No he terminado nada, mi vida es un bodrio de fracasos',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ]
}