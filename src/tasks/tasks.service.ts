import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDesc } from './entity/tasks.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskDesc)
        private taskRepsitory: Repository<TaskDesc>,
    ){}
//    private tasks: TaskDesc[]=[];
    getAllTask(): Promise<TaskDesc[]>{
        return this.taskRepsitory.find(); 
    }
    getTaskById(id:number):Promise<TaskDesc>{
        return this.taskRepsitory.findOneBy({id});
       // return this.tasks.find(task=>task.id===id);
    }
    createTask(createTask: CreateTaskDto ): Promise<TaskDesc> {
        //  const id = new Date().toString();
        // const task:Task = {
        //     id,
        //     name,
        //     description,
        // }
        // this.tasks.push(task)
        return this.taskRepsitory.save(createTask);
    }
    deleteTaskbyId(id:number){
        return this.taskRepsitory.delete(id)
       // this.tasks=this.tasks.filter(task=>task.id!==id)
    }
    UpdateTask(updateTaskDto:UpdateTaskDto,
        param:{id:number}){
        // let task =this.getTaskById(id)
        // task.description=description
        const task: TaskDesc = new TaskDesc();
        task.name = updateTaskDto.name;
        task.description = updateTaskDto.description;
        // return task
            return this.taskRepsitory.save(updateTaskDto)
        // return{body: updateTaskDto,param}
    }
}
