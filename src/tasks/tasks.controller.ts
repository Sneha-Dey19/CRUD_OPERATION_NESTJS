import { Body, Controller,Get, Post, Param , Delete, Patch, Res} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { CreateTaskDto } from './dto/createTask.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTask()
    }
    @Get("/:id")
    getTaskById(@Param('id') id:number){
        return this.tasksService.getTaskById(id)
    }
    @Post()
    createTask(@Body()createTaskDto: CreateTaskDto){
            return this.tasksService.createTask(createTaskDto)
    }
    @Delete('/:id')
    deleteTaskbyId(@Param('id') id:number){
        this.tasksService.deleteTaskbyId(id)
        return `task ${id} is deleted`
    }

    @Patch('/:id')
    updateTask(@Body() updateTaskDto: UpdateTaskDto,
    @Param() param: {id:number}){
        return this.tasksService.UpdateTask(updateTaskDto, param)
         
    }
}
