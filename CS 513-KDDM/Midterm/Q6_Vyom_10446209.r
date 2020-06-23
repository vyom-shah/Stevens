#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q6-NB

#Clear the memory
rm(list=ls())

# Load Adult_NB data file CSV
adultincome <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Midterm/adult_income_Bayes.csv",na.strings = " ?")
summary(adultincome)

# View data file 
View(adultincome)

#Removing the missing values
ai_miss<-na.omit(adultincome)
View(ai_miss)
summary(ai_miss)

#Training and testing data
index <- seq(1,nrow(ai_miss),by=5)
test<-ai_miss[index,]
training <-ai_miss[-index,]
summary(test)
summary(training)

#Applying Naive Bayes
library(e1071)
library(class)

naive_algo<- naiveBayes(Income ~ ., data = training)
predict_naive <- predict(naive_algo, test)
table(naive_algo=predict_naive,class=test$Income)

#prop table
prop.table(table(naive_algo=predict_naive,class=test$Income))

#Error in perdiction of result
wrong_prediction<-sum(predict_naive!=test$Income)
print(paste("Total bad Predictions:" , wrong_prediction))

#Error Rate in prediction of Naive Bayes  
wrong_prediction_rate<-wrong_prediction/length(predict_naive)
print(paste("Error Rate :" , wrong_prediction_rate))
print(paste("Accuracy :" , 100-(wrong_prediction_rate*100)))