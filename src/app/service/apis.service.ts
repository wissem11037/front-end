import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from '../Models/cours';
import { Enseignant } from '../Models/enseignant';
import { Forum } from '../Models/forum';
import { Utilisateur } from '../Models/utilisateur';
import { Apprenant } from '../Models/apprenant';
import { Chapitre } from '../Models/chapitre';
import { Lecon } from '../Models/lecon';
import { Test } from '../Models/test';
import { Question } from '../Models/question';
import { Reponse } from '../Models/reponse';
import { Message } from '../Models/message';

const URL = 'http://127.0.0.1:8000';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }
  //Cours
  getCours(): Observable<Cours> {
    return this.http.get<Cours>(URL+ "/api/cours/1");}
  //Enseignant
  getEnseignant(): Observable<Enseignant[]> {
      return this.http.get<Enseignant[]>(URL+ "/api/enseignants");}
    //Forum
  getForum(): Observable<Forum[]> {
      return this.http.get<Forum[]>(URL+ "/api/forums");}
    //Utilisateur
  getUtilisateur(): Observable<Utilisateur[]> {
      return this.http.get<Utilisateur[]>(URL+ "/api/utilisateurs");}
    //Apprenant
  getApprenant(): Observable<Apprenant[]> {
      return this.http.get<Apprenant[]>(URL+ "/api/apprenants");}
    //Chapitre
  getChapitre(): Observable<Chapitre[]> {
      return this.http.get<Chapitre[]>(URL+ "/api/chapitres");} 
    //Lecon
  getLecon(): Observable<Lecon[]> {
      return this.http.get<Lecon[]>(URL+ "/api/lecons");}  
    //Test
  getTest(): Observable<Test[]> {
      return this.http.get<Test[]>(URL+ "/api/Tests");}    
    //Question
  getQuestion(): Observable<Question[]> {
      return this.http.get<Question[]>(URL+ "/api/questions");} 
    //Reponse   
  getReponse(): Observable<Reponse[]> {
      return this.http.get<Reponse[]>(URL+ "/api/reponses");}   
    //Message 
  getMessage(): Observable<Message[]> {
      return this.http.get<Message[]>(URL+ "/api/messages");}
       
     }
   
