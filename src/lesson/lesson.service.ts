import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import {v4 as uuid} from 'uuid'
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
    ){}

    async getLesson(id:string){
        return this.lessonRepository.findOne({where:{id}});
    }

    async getLessons(){
        return this.lessonRepository.find();
    }

    async createLesson(createLessonInput:CreateLessonInput):Promise<Lesson> {
        const {name, strDate, endDate} = createLessonInput;

        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            strDate,
            endDate
        });

        return this.lessonRepository.save(lesson);
    }
}
