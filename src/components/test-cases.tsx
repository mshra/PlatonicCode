import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from './ui/input'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'


function TestCases({testcases}) {
    return (
        <div className='my-4'>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className='px-2'>
                    {testcases.map((tc,index)=>(
                        <TabsTrigger key={index} value={`testcase${index}`} >{`TestCase${index}`}</TabsTrigger>
                    ))}
                </TabsList>
                {testcases.map((tc,index)=>(
                    <TabsContent key={index} className='mx-2' value={`testcase${index}`}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {tc.input}
                            </CardTitle>

                        </CardHeader>
                    </Card>
                </TabsContent>
                ))}
               
            </Tabs>

        </div>
    )
}

export default TestCases
