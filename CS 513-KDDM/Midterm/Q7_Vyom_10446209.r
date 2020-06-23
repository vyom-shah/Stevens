#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q7-CART

rm(list=ls()) 
library(rpart)
library(rpart.plot)
library(RColorBrewer)
library(rattle)

# Load Adult_Dtree data file CSV
adultincome <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Midterm/adult_income_Dtree.csv")
summary(adultincome)

# View data file 
View(adultincome)

#Creating testing and training data
index <- seq(1,nrow(adultincome),by=5)
test<-adultincome[index,]
training <-adultincome[-index,]
summary(test)
summary(training)

#Growing the tree
Cart_income<- rpart(Income~., data =training)
summary(Cart_income)

#Plotting the graphs
rpart.plot(Cart_income)

#Scoring
Cart_prediction<-predict( Cart_income ,test , type="class" )

#Create the frequency table
table(Actual=test$Income,CART=Cart_prediction)
Cart_prediction2<-predict(Cart_income,test)
#str(Cart_prediction2)

#Accuracy
match<- (test$Income==Cart_prediction)*100
accuracy<-sum(match)/length(match)
print(paste("Accuracy :" , accuracy))


#Error Rate
err<- sum(test$Income!=Cart_prediction)
error_rate<-err/length(test$Income)
print(paste("Error Rate :" , error_rate))


library(rpart.plot)
prp(Cart_income)
fancyRpartPlot(Cart_income)