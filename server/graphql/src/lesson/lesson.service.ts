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
        const { nome, docente, tipo} = createLessonInput;
        const lesson = this.lessonRepository.create({
            id: uuid(),
            nome,
            docente,
            tipo
        });

        return this.lessonRepository.save(lesson);
    }


    async getLessonsByIds(ids: string[]): Promise<Lesson[]> {
        return this.lessonRepository.find({
          where: {
            id: { $in: ids } as any
          },
        });
      }
}
