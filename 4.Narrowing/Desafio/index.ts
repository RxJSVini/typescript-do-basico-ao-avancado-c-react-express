
interface IUserReview {
    name:string;
    review?:number;
}


class ReviewServiceClass implements IUserReview {
    name
    review
    constructor(name:string, review?:number){
        this.name = name;
        if(review){
            this.review = review;
        }
    }
}

const serviceEvaluation = (avaliator:ReviewServiceClass) =>{
  if('review' in avaliator){
    if(avaliator.review == 1){
        return `Poxa, ${avaliator.name} sentimos por não ter atingido suas expectativas, volte aqui novamente para experimentar as novidades`;
    } else if (avaliator.review == 2){
        return `Poxa, ${avaliator.name} sentimos por não ter atingido suas expectativas, volte aqui novamente para experimentar as novidades`;
    }else if (avaliator.review == 3){
        return `Poxa, ${avaliator.name} sentimos por não ter atingido suas expectativas, volte aqui novamente para experimentar as novidades`;
    }else if (avaliator.review == 4){
        return `Olá, ${avaliator.name} muito obrigado pelo seu feedback, muito em breve teremos feedbacks.`;
    }else if (avaliator.review == 5){
        return `Oii, ${avaliator.name} estamos muito felizes com o seu feedback, volte para experimentar nossas novidades`;
    }

  } else {
    return `Poxa, ${avaliator.name} sentimos falta do seu feedback, não esqueça de nos avaliar da próxima vez.`;
  }
}

const firstUserAvevaluation = new ReviewServiceClass("Vinicius Doe");
const secoundUserAvevaluation = new ReviewServiceClass("Marayah Doe", 1);
const thirdUserAvevaluation = new ReviewServiceClass("Carlos Doe", 3)
const lastUserAvevaluation = new ReviewServiceClass("John Doe", 5)


console.log(serviceEvaluation(firstUserAvevaluation))
console.log(serviceEvaluation(secoundUserAvevaluation))
console.log(serviceEvaluation(thirdUserAvevaluation))
console.log(serviceEvaluation(lastUserAvevaluation))