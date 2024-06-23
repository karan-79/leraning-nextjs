import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "../../components/MealsGrid/MealsGrid";
import {getMeals} from "../../service/mealsService";
import {Suspense} from "react";
import MealsLoading from "@/app/meals/MealsLoading";

async function MealsContent() {
    const meals = await getMeals()
    return <MealsGrid meals={meals}/>
}

const Meals = () => {
    return <>
        <header className={classes.header}>
            <h1>
                Meals created {' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite recipie and cook it yourself
            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                <MealsContent/>
            </Suspense>
        </main>
    </>
}

export default Meals