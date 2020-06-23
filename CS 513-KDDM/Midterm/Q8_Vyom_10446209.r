#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q8-C5.0 Analysis

#clearing the memory
rm(list=ls()) 
library(C50)

# Load Adult_Dtree data file CSV
adultincome1 <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Midterm/adult_income_Dtree.csv",na.strings = " ?")
summary(adultincome1)

#Removing the space from the Dataset
adultincome<-as.data.frame(apply(adultincome1,2,function(x)gsub('\\s+', '',x)))

# View data file 
View(adultincome)

#Creating training and test
index <- seq(1,nrow(adultincome),by=5)
test<-adultincome[index,]
training <-adultincome[-index,]
summary(test)
summary(training)

Cart_income<- C5.0( Income~., data =training )
summary(Cart_income)

#PLOTTING THE GRAPHS
plot(Cart_income)


#SCORING
Cart_prediction<-predict( Cart_income ,test , type="class" )

#CREATING THE FREQUENCY TABLE
table(Actual=test$Income,Cart_prediction)
#Cart_prediction2<-predict(Cart_income,test)


#ACCURACY IN PERCENTAGE
match<- (test$Income==Cart_prediction)*100
accuracy<-sum(match)/length(match)
print(paste("Accuracy :" , accuracy))

#ERROR RATE
err<- sum(test$Income!=Cart_prediction)
error_rate<-err/length(test$Income)
print(paste("Error Rate :" , error_rate))
