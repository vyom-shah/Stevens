#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q4-EDA

#Clear the memory
rm(list=ls())

#install.packages("dplyr")
#install.packages("plyr")
library(dplyr)
library(plyr)

# Load Adult_EDA data file CSV
adultincome <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Midterm/adult_income_EDA.csv",na.strings = " ?")

# View data file 
View(adultincome)

#Find the max,min,median,mean and SD of numeric values
a<-select_if(adultincome,is.numeric)
summary(a)
colwise(sd)(a)

#Replace missing values with median of numbers
a1<-data.frame(a)
sum(is.na(a1))
colSums(is.na(a1))
for(i in 1:ncol(a1)){
  a1[is.na(a1[,i]), i] <- median(a1[,i], na.rm = TRUE)
}
View(a1)
#There are no missing values!

#Boxplot for all numeric values
boxplot(a)