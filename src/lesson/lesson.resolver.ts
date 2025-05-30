import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { EditLessonInput } from "./edit-lesson.input";

@Resolver(of => LessonType)
export class LessonResolver{
    constructor(
        private lessonService: LessonService
    ){}
    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ){
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons(){
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson( 
        @Args('createLessonInput')createLessonInput:CreateLessonInput
    )
        {
        return this.lessonService.createLesson(createLessonInput);
    }

    @Mutation(returns=>LessonType)
    editLesson(
        @Args('editLessonInput')editLessonInput:EditLessonInput
    ){
        return this.lessonService.editLesson(editLessonInput);
    }

    @Mutation(returns=>Boolean)
    deleteLesson(
        @Args('id') id:string,
    ){
        return this.lessonService.deleteLesson(id);
    }
}