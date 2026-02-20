import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import 'dotenv/config'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    const categories = [
        {
            name: 'Investment Banking',
            slug: 'ib',
            icon: 'TrendingUp',
            description: 'Master M&A, LBO modeling, valuation techniques, and market knowledge tailored for top-tier banks.',
        },
        {
            name: 'Corporate Finance',
            slug: 'corporate-finance',
            icon: 'Briefcase',
            description: 'Deep dive into capital budgeting, risk management, and financial planning & analysis (FP&A) roles.',
        },
        {
            name: 'Accounting',
            slug: 'accounting',
            icon: 'Calculator',
            description: 'Solidify your grasp on GAAP/IFRS standards, 3-statement modeling, and audit fundamentals.',
        },
    ]

    console.log('Seeding categories...')
    for (const category of categories) {
        await prisma.category.upsert({
            where: { slug: category.slug },
            update: category,
            create: category,
        })
    }

    const testTypes = [
        {
            name: 'Technical',
            slug: 'technical',
            description: 'Core concepts, modeling, and financial theory.',
        },
        {
            name: 'Behavioral',
            slug: 'behavioral',
            description: 'Fit questions, soft skills, and leadership.',
        },
    ]

    console.log('Seeding test types...')
    for (const type of testTypes) {
        await prisma.testType.upsert({
            where: { slug: type.slug },
            update: type,
            create: type,
        })
    }

    console.log('Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
