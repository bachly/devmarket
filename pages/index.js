import clsx from 'clsx';
import React from 'react'
import Pod from '../components/Pod';
import PodWithList from '../components/PodWithList';
import SkillList from '../components/SkillList';

export default function ProfilePage() {
    return <>
        <header>
            <div className="top-bar py-8 bg-black">
            </div>

            <div className="nav-bar py-4 bg-black">

            </div>
        </header>

        <div className="max-w-6xl mx-auto">
            <div className="pt-12"></div>

            <section className="border-t border-l border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="pb-1/1 bg-gray-300">
                        Picture
                    </div>
                    <div className="lg:col-span-3 border-b border-r border-gray-200">
                        <div className="py-6 px-12">
                            <h1 className="text-5xl font-light">Martin Chikilian</h1>
                            <div className="pt-1"></div>
                            <div className="font-bold">Portland, Oregon, USA</div>
                            <div className="font-bold">English, French, German</div>
                            <div className="pt-4"></div>
                            <SkillList />
                        </div>
                    </div>
                    <PodWithList
                        title="Portfolio"
                        subtitle="PHP, Ruby, Javascript"
                        maxListItems={7}
                        listItemPlaceholders={{
                            name: "Project name",
                            description: "Skills used"
                        }}
                        list={[
                            {
                                name: "NavalPlan",
                                description: "PHP, Ruby"
                            },
                            {
                                name: "MyTime",
                                description: "Javascript"
                            },
                            {
                                name: "Formidable",
                                description: "PHP, Ruby"
                            }
                        ]}
                    />
                    <PodWithList title="Experience"
                        list={[]}
                        maxListItems={4}
                        listItemPlaceholders={{
                            name: "Technology",
                            description: "Years"
                        }}
                    >

                    </PodWithList>
                    <Pod
                        title="Sample code and algorithms"
                    />
                    <Pod
                        title="Availability"
                    />
                </div>
            </section>
        </div>
    </>
}